import { useState } from "react";

const AddComment = ({addNewCommentHandler})=>{
    //Ajouter un état à mon formulaire : on va utiliser le hook useState
    const [comment, setComment] = useState({avatar : "", name : "", date : "", message : ""}); //L'objet etat est immutable

    const onInputChange = (e)=>{
        setComment({...comment, [e.target.name] : e.target.value})
    }

    return <div>
        <h2>Ajout d'un nouveau commentaire :</h2>
        <form>
            <div className="ui input">
                <label htmlFor="avatar">Avatar</label>
                <input type="text" placeholder="avatar" id="avatar" name="avatar" value={comment.avatar} onChange={(event)=>onInputChange(event)} />
            </div>
            <div className="ui input">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="name" id="name" name="name" value={comment.name} onChange={(event)=>onInputChange(event)} />
            </div>
            <div className="ui input">
                <label htmlFor="datePublication">Date de publication</label>
                <input type="text" placeholder="date de Publication" name="date" id="datePublication" value={comment.date} onChange={(event)=>onInputChange(event)} />
            </div>
            <div className="ui input">
                <label htmlFor="message"> Message </label>
                <input type="text" placeholder="Message" id="message" name="message" value={comment.message} onChange={(event)=>onInputChange(event)}/>
            </div>
            <div>
                <button type="button" className="ui primary button" onClick={()=>addNewCommentHandler(comment)}>Valider</button>
            </div>
        </form>
    </div>
}

export default AddComment;