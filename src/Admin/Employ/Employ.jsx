import React,{useEffect,useState} from 'react'
import { collection, getDocs, deleteDoc,doc } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from './EmployTableSource';
import { db } from '../../Components/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Employ.scss'
import { GridToolbarContainer } from "@mui/x-data-grid";
import { GridToolbarExport } from "@mui/x-data-grid";
import SideBar from './../SideBar/SideBar';

const Employ = () => {

  const navigate = useNavigate()

    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'registration'));
            // const q = query(querySnapshot, orderBy("createdAt", "desc"))
            querySnapshot.forEach((doc)=>{
              list.push({id: doc.id, ...doc.data()})
              console.log(doc.id, "=>", doc.data());
            })
            setData(list)
            console.log(list)
          } catch(err){
            console.log(err)
          }
        }
        fetchData()
      },[])
      console.log(data)


      const handleView = async (id) => {
        navigate('/employ/' + id)
      };

      const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "registration", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };

      function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <GridToolbarExport />
          </GridToolbarContainer>
        );
      }

      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                {/* <Link to="adminHome/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link> */}
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
            <div
              className="viewButton"
              onClick={() => handleView(params.row.id)}
            >
              View
            </div>
              </div>

             

            );
          },
        },
      ];
      return (
        <div className="list">
        <SideBar />
        <div className="datatable">

          <div className="datatableTitle">
            Basic Path
            {/* <Link to="/adminHome/new" className="link">
              Add New
            </Link> */}
          </div>
          <DataGrid

          {...data}
          components={{
          Toolbar: CustomToolbar,
          }}
          
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            
            checkboxSelection
          />
        </div>
      </div>
      );
}

export default Employ