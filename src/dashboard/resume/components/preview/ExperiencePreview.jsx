import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:resumeInfo?.ThemeColour
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor:resumeInfo?.ThemeColour
        }} />

        {resumeInfo?.Experience?.map((experience,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:resumeInfo?.ThemeColour
                }}>{experience?.posTitle}</h2>
                <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span>{experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {experience.worksummary}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.worksummary}} />
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview