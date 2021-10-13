
import React, { Component } from 'react';
import UserItem from './UserItem';
//ganti dari class ke function 

 class Users extends Component {
  
    render() {
        return (
            <div style={userStyle} className="mt-3">
             {this.props.users.map(user=>(
                 <UserItem key={user.id} user={user}/>
             ))}

            </div>
        )
    }
}
//userStylenya sbuah function dipanggil dari style
const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}



export default Users;


/*OLD SCRIPT DAN KETERANGAN :
//buat hardcode utk: {id,login,avatar_url,html_url} sblum kita fetch
 //user mrupakan object array
 //state hardcode kita hapus dibawah kita pakai axios ambil data user dari github
//   state = {
//       users:[
//           {     id:'1',
//                 login:'mojombo',
//                 avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
//                             html_url:'https://github.com/mojombo'},
//                 { id:'2',
//                 login:'defunkt',
//                 avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4',
//                 html_url:"https://github.com/defunkt"},
//       {
//         id: '3',
//         login: 'pjhyett',
//         avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
//         html_url: 'https://github.com/pjhyett'
//       }

//       ]
//   };
   //nah users state diatas di maping ke UserItem yg mana props atau variable injectnya
   //udah disipakan shinga sesuai masukanya dan terupdate! 1userItems adalah utk 1 card field
   //sedang uers itu banyak Value UserItem atau value banyak card yg diisikan
   //kita pake map utk implementasikan
   //oiya user yg sebelah kiri adalah nama propsnya this.props.user  user = {user},ke itu utk indexya
   //nah utk tampilkan semuanya maka  Users dipanggil di App
   // jadi user sebelah kiri adalah nama props user={user} dan user dikurung kurawal adalah state
   //yg sbgai varible ketika di maping mewakili Users!
   //smntara menggunakan class kita pakai axios
    render() {
        return (
            <div style={userStyle} className="mt-3">
             {this.state.users.map(user=>(
                 <UserItem key={user.id} user={user}/>
             ))}

            </div>
        )
    }
}





*/





/*
mmbuat user style tidak lewat css tapi pakai dlm render react
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

*/

/*
jadi gini UserItem adalah 1 buah field dari Users
nah users itu merupakan state yg berisi dara dari user github
yg fieldnya antara lain id,login,avatar,url_html githubnya dan avatar_urlnya
userItem mmbuat cetakan layout agar nanti diisi oleh data dari users yg masuk pada
component UserItem ini nah caramasukanya udah disipakan yautu field2 tadi yg kit asbut dgn props

*/