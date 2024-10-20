import React from 'react'
import Content from './Content';

const AddReply = ({setIsReplyComment}) => {
  return (
    
            <div className=" "
            onClick={() => {
                setIsReplyComment(true);
              }}
            
            >

              
              
                    <Content
                    //   key={index}
                    //   id={item?.id}
                    //   courseId={item?.courseId}
                    //   author={item?.author}
                    //   insertDate={item?.insertDate}
                    //   title={item?.title}
                    //   describe={item?.describe}
                    //   pictureAddress={item?.pictureAddress}
                    //   likeCount={item?.likeCount}
                    />
                
              </div>
  )
}

export default AddReply;
