import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Grid, Header, Icon, Image, Reveal } from 'semantic-ui-react';
import { addResumeImage } from '../store/actions/resumeActions';

export const AddProfilePicture = ({resumeId,progress,setProgress}) => {
    const dispatch = useDispatch()
    const imageRef = useRef();
    const [imageLoading, setImageLoading] = useState(0)
    const profilePicture = useSelector(state => state.resume.resume.profilePicture)
    const handleImageUpload = (e) => {
        if (!e.target.files[0].name.endsWith(".jpg"||".png"||".jpeg")) {
          toast.warning("Dosya formatı doğru değil");
        }else if(e.target.files[0].size>20971520){ //byte
          toast.warning("Dosya boyutu 20mb den küçük olmalıdır");
        }else{
          const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("resumeId", resumeId);
        dispatch(addResumeImage(formData,setImageLoading))
    
        }
    }
    return (
        <Grid centered>
            <Grid.Row>

{console.log(imageLoading)}
            <Reveal animated="fade" >
                <Reveal.Content visible>
                  <Image
                  
                  src={profilePicture?profilePicture:"/img/white-image.png"}
                  circular
                  size="small"
                  onClick={() => imageRef.current.click()}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    style={{ opacity: "0.5" }}
                    src={profilePicture?profilePicture:"/img/white-image.png"}
                    circular
                    size="small"
                    onClick={() => imageRef.current.click()}
                    
                    /> 
                    <Header>Resim eklemek için yukarıdaki resme tıklayın</Header>                  
                </Reveal.Content>
              </Reveal>
              <input
                ref={imageRef}
                
                type="file"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                />
                </Grid.Row>
                {progress&&<Grid.Row><Grid.Column textAlign="center"><Button onClick={()=>setProgress(progress+1)} positive>İleri</Button></Grid.Column></Grid.Row>}

        </Grid>
    )
}
