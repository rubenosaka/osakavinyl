import React from 'react'

import TaxonomiesForm from './Taxonomies/Form';

const Admin = () => {
    return (
        <section className="ov-section">

            <div className="row">
                <div className="col-sm-12">
                    <h1>Admin Panel</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <TaxonomiesForm/>
                </div>
            </div>                    

        </section>
    )
}

export default Admin;
