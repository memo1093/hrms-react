import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { Card,  Icon, Image } from 'semantic-ui-react'
import { getResumeById } from '../../store/actions/resumeActions';

export const ResumeDetails = () => {
    const {id} = useParams()
    const resume = useSelector(state => state.resume)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getResumeById(id))
        
      }, [dispatch,id]);
    return resume.loading===false&&(
        <Card centered>
            
      <Card.Content>
        <Card.Header textAlign="center">{resume.resume.title} <Image as={Link} to={`/updateResume/${resume.resume.id}`} floated="right">
         <Icon corner name="edit" />   </Image> </Card.Header>
        <Card.Meta>{resume.resume.createdAt}</Card.Meta>
        <Card.Description>
          {resume.resume.coverLetter}
        </Card.Description>
      </Card.Content>
    </Card>
    )
}
