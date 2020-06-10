import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})




const customers = [
{
  'id' : 1,
  // 랜덤으로 이미지 변경해주는 사이트 이미지사이즈 64*64
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : ' 남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김말똥',
  'birthday' : '910222',
  'gender' : ' 남자',
  'job' : '디자이너'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '이명수',
  'birthday' : '201202',
  'gender' : ' 여자',
  'job' : '중학생'
}

]

/* <Customer  id={customers[0].id} /> */
        
class App extends Component{
  render() {
    const{classes} = this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c => { return ( 
        <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
        />);//map.return
      })}
        </TableBody>
      </Table>
      </Paper>
    );//redner.return
  }//render
}//App

export default withStyles(styles)(App);
