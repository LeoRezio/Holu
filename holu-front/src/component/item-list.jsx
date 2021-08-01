import React, {useState,useEffect} from 'react';
import ListDataService from '../service/list.service'

const List = () => {
  const [recordResponse, setRecordsResponse] = useState(); 
  const [updateName, setUpdateName] = useState();
  const [updateQnty, setUpdateQnty] = useState();
  const [updateId , setUpdateId] = useState();
  
  useEffect(() => { 
    refreshPage();
    });
  
  const refreshPage = () => {
    ListDataService
      .getProduct()
      .then(response => setRecordsResponse(response.data))
  }

  const deleteProduct = (product) => {
    console.log(product);
    ListDataService.deleteProduct(product);
  }

  const updateProduct = () => {
    var data = {_id:updateId ,name: updateName, qnty: updateQnty};
    ListDataService.putProduct(data);
  }

  return(
    <div class="container py-5">
      <div className="d-inline">
          <div className="mx-auto d-flex justify-content-between bg-primary py-4 px-4 head-size rounded-top">
            <h1 className="h3 text-white m-0">Marketlist</h1>
            <button type="button" className="btn-modal btn-primary border-0 p-0" data-bs-toggle="modal" data-bs-target="#popModal">
              <i className="bi bi-plus size-icon"/>
            </button>
          </div>
          <table className="mx-auto table table-bordered head-size">
            <thead>
              <tr>
                <th className="mw-check"></th>
                <th className="h5">Name</th>
                <th className="h5 mw-qnty">Qnty</th>
                <th className="mw-option"></th>
              </tr>  
            </thead>
            <tbody>
              {recordResponse?.map((product) => (
                <tr>
                  <th className="text-center mw-check"><input className="ms-1 form-check-input p-2" type="checkbox" value=""/></th>
                  <td>{product.name}</td>
                  <td className="mw-qnty text-center">{product.qnty}</td>
                  <td className="mw-option text-center">
                    <div className="d-flex justify-content-around">
                      <button className="border-0 bg-transparent" type="button" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => {setUpdateId(product._id)}}>
                        <i className="bi bi-pencil-square size-icon text-white bg-info p-2 rounded-circle"></i>
                      </button>
                      <button className="border-0 bg-transparent" type="button" data-bs-toggle="modal" onClick={() => {deleteProduct(product._id)}}>
                        <i class="bi bi-trash size-icon text-white bg-danger p-2 rounded-circle"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> 
          </table> 
          <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Product detail</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" onChange={(e) => {setUpdateName(e.target.value)}} />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Qnty" aria-label="Qnty" onChange={(e) => {setUpdateQnty(e.target.value)}} />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {updateProduct()}}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default List;





