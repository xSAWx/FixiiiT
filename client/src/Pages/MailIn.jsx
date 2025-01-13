import React from 'react'
import BreadCrumbs from '../Components/common/BreadCrumbs'
import { SendForm } from './AboutUs'

function MailIn() {
  return (
    <section className="">
        <BreadCrumbs navs={["Home","Mail In"]} routes={["/","/mailin"]} title="MainIn" />
       
            <SendForm />
    
    </section>
  )
}

export default MailIn
