import {Box}  from '@mui/material';
import styled from '@emotion/styled';
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useEffect } from 'react';

const Component = styled.div`
  background-color: #fbf9f9;
`
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons hai ye
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const Editor = () => {
useEffect(()=>{
  const quillServer = new Quill('#container', {theme: 'snow' , modules: {toolbar: toolbarOptions}})
},[])

  return (
    <Component >
      <Box className='container' id='container'> </Box>
      </Component>
  )
}

export default Editor;