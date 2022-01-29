
import React from 'react'
import MaterialTable from 'material-table'


const TollTable = () => {

    const data = [
        {district : 'Lilongwe', Tollname : 'Kapalankhwazi', section: 'Kasungu-Jenda'},
        {district : 'Blantyre', Tollname : 'Limbe', section: 'Zomba-Blantyre'},
        {district : 'Mzimba', Tollname : 'Jenda', section: 'Jenda-Embangweni'},
        {district : 'Kasungu', Tollname : 'Nkhamenya', section: 'Kasungu-Mzimba'},
    ]

    const columns = [
        { title: 'District', field: 'district'},
        { title: 'Toll Name', field: 'Tollname'},
        { title: 'Section', field: 'section'}
    ]
    return(
        <div>

            <MaterialTable  title = 'TOLLGATE DETAILS'
              data = {data}
              columns={columns}
              options={{
                  search: true,
                  paging: false,
                  filtering : true,
                  exportButton: true
              }}
            
            />


        </div>
    )
}

export default TollTable