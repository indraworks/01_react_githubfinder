import React,{Component} from 'react'
import './App.css';
class App extends Component { 
//pelajaran 5 tentang itenray selain tanda statmenent? true :false
//ada juga itenary yg pakai && artinya hanya akan muncul/dirender 
//jika dia statmenet kiri benar statment && variable_yg_dirender
//selain itu tidak muncul sbb
  render() {
    const name = 'Indra Suryawan';
    const loading =false;
    const showName =true;
    return(  
      <div className={'App'}>
        {loading?<h4>Loading...</h4>:<h1>Hello {showName && name}</h1>

        }
      </div>

    )
  

}






  //pelajaran 4: didalam kalang render /diatas return bisa dibuat kalang if then else
//dibawah jika loading true maka yg ditampilkan hanya Hi iam loading krn return hanya 1 kali 
//dalam render jsx
//kalau didalam jsx ( kalang return() harus denga itenaris ? contoh:isTrue?true:false
// foo =()=> 'Bars';
// render() {
//    const loading = true;
//    if (loading) {
//       return <h4>Hi iam loading!!</h4>
//    }
//   return(  
//      <h1>hello {this.foo()} </h1>
//   )
// }


  //pelajaran3: utk function kn class maka dipanggil dgn {this.mnama_funct()}
//statamenet func atau method diatas render! 


// render() {
   
//      return(  
//         <h1>hello {this.foo()} </h1>
//      )
//    }



//    //pelajaran2 :conditional jsx
//    render() {
//     const name="jhon";
//    return(  
//       <h1>hello {name} </h1>
//    )
//  }
   //pelajaran 1
  // render() {
  //   return React.createElement('h1',null,'Hello Indra',
  //   React.createElement('h6',null,'Hello world'),);
           
  // }
}

export default App

/*Catatan
dlm jsx utk for diganti htmlFor'
kaalu banyak div maka close atau wrapping degan Fragment
<React.Fragment>
asal mula react utk element tanpa jsx adalah 
React.createElement(tag,atribute,'isinya atau string')
contoh 
React.createElement(h1,null,'Hello Indra),
React.createElement(h1,null,'Hello world),


dengan jsx:
// return( 
    //   <React.Fragment>
    //   <div className="App">
    //     <h1>Hello World</h1>
    //     <h2>Hello Indra</h2>
    //   </div>
    //   </React.Fragment>
    // )

*/

/*
catatan conditional dan expresion dalam jsx 
didalam jsx utk javascript dalam krung ditulis {}
render() {
   const name="jhon";
  return(  
     <h1>hello {name} </h1>
  )
}



*/