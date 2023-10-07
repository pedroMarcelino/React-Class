import { useState } from "react";
import { db } from "./FireConnect";
import { addDoc, collection, doc, getDoc, setDoc, getDocs, updateDoc} from "firebase/firestore";


function FireApp(){
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [idPost, setIdPost ] = useState('');

    const [posts, setPosts] = useState([])

    async function handleAdd(){
        // await setDoc(doc(db, 'posts', "12345"), {
        //     titulo: titulo,
        //     autor: autor,
        // })
        // .then(()=>{
        //     console.log('dados registrados');
        // })
        // .catch((error)=>{
        //     console.log('dados nao registrados');
        // })

        await addDoc(collection(db, 'posts'), {
            titulo: titulo,
            autor: autor,
        })
        .then(()=>{
            console.log('dados registrados');
            setTitulo('');
            setAutor('');
        })
        .catch((error)=>{
            console.log('dados nao registrados');
        })
    }

    async function buscarItem(){
        //BUSCAMOS POSTS UNICOS ABAIXO

        // await getDoc(doc(db, 'posts', '12345'))
        // .then((snapshot)=>{
        //     setTitulo(snapshot.data().titulo);
        //     setAutor(snapshot.data().autor);
        // })
        // .catch((error)=>{
        //     console.log('dados nao registrados');
        // })

        const postRef = collection(db, 'posts')
        await getDocs(postRef)
        .then((snapshot)=>{
            let lista = [];

            snapshot.forEach((doc)=>{
                lista.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                    autor: doc.data().autor,
                })
            })

            setPosts(lista)
            console.log(lista);
        })
        .catch((e)=>{
            console.log(e);
        })
        
    }

    async function autalizar(){
        const docRef = doc(db, 'posts', idPost)
        await updateDoc(docRef, {
            titulo: titulo,
            autor: autor,
        })
        .then((snapshot)=>{
            console.log('atualizado com sucesso');
            setAutor('')
            setTitulo('')
            setIdPost('')
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    return(
        <div className="fireapp">
            <h1>ReactJS + Firebase</h1>
            <div className="container">
                <label htmlFor="id">Insira o id:</label>
                <input type="text" name="id" id="id" onChange={ (e) => {setIdPost(e.target.value)} } />

                <label htmlFor="titulo">Titulo:</label>
                <textarea name="titulo" id="titulo" cols="30" rows="10" value={titulo} onChange={ (e) => {setTitulo(e.target.value)} }></textarea>
                <label htmlFor="autor">Autor:</label>
                <input type="text" name="autor" id="autor" value={autor} onChange={ (e) => {setAutor(e.target.value)} } />
                <button onClick={handleAdd}>Cadastras</button>
                <button onClick={buscarItem}>Buscar item</button>
                <button onClick={autalizar}>Atualizar</button>

                <ul>
                    {
                        posts.map((item) => {
                            return(
                                <li key={item.id}>
                                    <span>{item.id}</span><br />
                                    <span>{item.titulo}</span><br />
                                    <span>{item.autor}</span><br /><br />   
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FireApp;