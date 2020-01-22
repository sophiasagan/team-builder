import React, {useEffect} from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin: 1%;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 4%;
`;



function Member(props) {
    const {newMember, team, memberToEdit, setMemberToEdit, isEdit, setIsEdit} = props;


    

    return (
        <CardContainer>
        {team.map(member=>{
            return (
            <Card>
                <h3>Name: {member.name}</h3>
                <p>Email: {member.email}</p>
                <p>Role: {member.role}</p>
                <button onClick={()=>{
                    setMemberToEdit(member);
                    setIsEdit(!isEdit);
                    // console.log(isEdit);
                }}>Edit</button>
            </Card>
            );
        })}
        </CardContainer>
    );
}


export default Member;