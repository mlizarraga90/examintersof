import React, { useState, useEffect } from 'react'
import { Crew } from '../../emulator/types'
import crewService from '../../emulator/crewService'
import CrewTable from './CrewTable'

function CrewPage (props: {}) {
  const [ crew, setCrew ] = useState<Crew>([])

  useEffect(
    () => {
      let jobSplit:Object | any  = window.settingsService;
      const {counts,totalMembers}=crewService.getSummary();
      if(counts.unassigned>0){
          /**
           * AT THIS POINT I GET THE INFORMATION ABOUT HOW MANY UNASSIGNED MEMBERS 
           * EXIST AND THE AVAREGE OF EACH JOB(MEDIC,ENGINEER AND PILOT ) 
           * I THINK I HAVE TO IMPORT THE CREWMANAGE CLASS TO ADD ON EACH  JOB(MEDIC,PILOT AND ENGINEER)
           * BUT I UNDERSTOOD THAT I SHOULD NOT IMPORT THAT CLASS, SO I COULDN´T FIND OUT HOW TO USE 
           * THE METHODS THAT ARE STORED AT crewManger TO UPDATE THE JOBS AND UNASSIGNED VALUES.
           * 
           * */
          console.log(jobSplit.getJobSplit());
          console.log(totalMembers);
          console.log( totalMembers*(jobSplit.jobSplit.medic/100));
          console.log( totalMembers*(jobSplit.jobSplit.engineer/100));
          console.log( totalMembers*(jobSplit.jobSplit.pilot/100));
      }
      
      crewService.getCrew().then((crew) =>{
        setCrew(JSON.parse(
          JSON.stringify(crew.sort((a, b):any=>{
              return b.lastName > a.lastName ? -1:1
          }))
        ))
      })
    },
    [crew]
  )

  return <div className='tableContainer'>
    <CrewTable crew={crew} />
  </div>
}

export default CrewPage
