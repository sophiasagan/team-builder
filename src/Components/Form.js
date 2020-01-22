import React, {useEffect} from 'react';
import styled from 'styled-components'


const FormContainer = styled.div`
    margin-top: 5%;
    width: 30%;
    margin: 4% auto;
    
`;

const Form2 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    
`;

const label = styled.div`
    display: flex;
    text-align: center;
    `;


function Form(props) {
    const {setTeam, team, newMember, setNewMember, memberToEdit, isEdit, setIsEdit} = props;
    

    function makeNewMember (e){
      setNewMember({
          ...newMember,
          [e.target.name]: e.target.value
      })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // setTeam(oldTeam => [...oldTeam, newMember]);
        if (isEdit){
            
            let newMemb = [...team];
            let person = newMemb.find(person => person.email === memberToEdit.email && person.name === memberToEdit.name && person.role === memberToEdit.role);
            let index = newMemb.indexOf(person);
            // console.log(index);
            newMemb[index] = newMember;
            setTeam(newMemb);
            
            setIsEdit(false);
        } else {
        setTeam([...team, newMember]);
        // console.log(team);
        setNewMember({
            name: "",
            email: "",
            role: "",
        })}
    }

    useEffect(()=>{
        setNewMember(memberToEdit)
    }, [memberToEdit])


    // console.log(newMember);
  return (
    <FormContainer>
        <h1>Enter Team Member Info:</h1>
        <Form2 onSubmit={onSubmit}>
            <label>Name: 
                <input onChange={makeNewMember}  value = {newMember.name} name="name" type="text" placeholder="name"/>
            </label>
            <label>Email: 
                <input onChange={makeNewMember}  value = {newMember.email} name="email" type="email" placeholder="email"/>
            </label>
            <label>Role: 
                <input onChange={makeNewMember}  value = {newMember.role} name="role" type="text" placeholder="role"/>
            </label>
            
            <button>Submit</button>
        </Form2>
    </FormContainer>
  );
}

export default Form;