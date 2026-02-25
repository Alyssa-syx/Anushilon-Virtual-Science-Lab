import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useRecoilState } from 'recoil';
import { db } from '../../configs/firebase';
import { joinDialogAtom } from '../../utils/atoms';

function JoinClass() {
  const [open, setOpen] = useRecoilState(joinDialogAtom);
  const [classId, setClassId] = useState('');
  const { auth } = useSelector((state) => state);

  const handleClose = () => {
    setOpen(false);
  };

  const joinClass = async () => {
    if (classId === undefined || classId === '') {
      toast.error('请输入实验室代码');
      return;
    }

    try {
      // check if class exists
      const classRef = await db.collection('classes').doc(classId).get();

      if (classRef.exists) {
        // user is enrolled
        const classData = await classRef.data();

        // add to current user's class list
        const userRef = await db
          .collection('users')
          .where('email', '==', auth.user.email)
          .get();

        const userData = await userRef.docs[0].data();

        let tempClassrooms = userData.enrolledClassrooms;
        tempClassrooms.push({
          creatorEmail: classData.creatorEmail,
          creatorName: classData.creatorName,
          creatorPhoto: classData.creatorPhoto,
          id: classId,
          name: classData.name,
        });
        await userRef.docs[0].ref.update({
          enrolledClassrooms: tempClassrooms,
        });
        // alert done
        toast.success(
          `已成功加入 ${classData.name} 实验室`
        );

        setClassId('');
        handleClose();
      } else {
        toast.error('未找到该实验室，请检查代码是否正确');
        setClassId('');
        handleClose();
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="joinClass">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">加入实验室</DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入实验室加入码以加入
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="实验室代码"
            type="text"
            fullWidth
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={joinClass} color="primary">
            加入
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default JoinClass;
