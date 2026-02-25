import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useRecoilState } from 'recoil';
import { db } from '../../configs/firebase';
import { createDialogAtom } from '../../utils/atoms';

function CreateClass() {
  const [open, setOpen] = useRecoilState(createDialogAtom);
  const [className, setClassName] = useState('');
  const { auth } = useSelector((state) => state);

  const handleClose = () => {
    setOpen(false);
  };

  const createClass = async () => {
    if (className === undefined || className === '') {
      toast.error('请输入实验室名称');
      return;
    }

    try {
      const newClass = await db.collection('classes').add({
        creatorEmail: auth.user.email,
        name: className,
        creatorName: auth.user.name,
        creatorPhoto: auth.user.avatar,
        posts: [],
      });

      // add to current user's class list
      const userRef = await db
        .collection('users')
        .where('email', '==', auth.user.email)
        .get();

      const docId = userRef.docs[0].id;
      const userData = userRef.docs[0].data();

      let userClasses = userData.enrolledClassrooms;
      userClasses.push({
        id: newClass.id,
        name: className,
        creatorName: auth.user.name,
        creatorPhoto: auth.user.avatar,
      });
      const docRef = await db.collection('users').doc(docId);
      await docRef.update({
        enrolledClassrooms: userClasses,
      });

      setClassName('');
      handleClose();
      toast.success('实验室创建成功！');
    } catch (err) {
      setClassName('');
      handleClose();
      toast.error(`创建失败 - ${err.message}`);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">创建实验室</DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入实验室名称，我们将为你创建专属实验室！
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="实验室名称"
            type="text"
            fullWidth
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={createClass} color="primary">
            创建
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateClass;
