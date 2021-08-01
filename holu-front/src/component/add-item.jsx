import React, {useState, useEffect} from 'react' ;
import ListDataService from '../service/list.service';

//class AddItem extends React.Component {
//    constructor(props) {
//      super(props);
//      this.onNameChange = this.onNameChange.bind(this);
//      this.onQntyChange = this.onQntyChange.bind(this);
//      this.saveProduct = this.saveProduct.bind(this);
//      this.state = {
//        name: '',
//        qnty: null
//      };
//    }
//  
//    onNameChange(e) {
//      this.setState({
//        name: e.target.value
//      });
//    }
//  
//    onQntyChange(e) {
//      this.setState({
//        qnty: e.target.value
//      });
//    }
//  
//    saveProduct() {
//      var data = {
//        name: this.state.name,
//        qnty: this.state.qnty
//      };
//      ListDataService.postProduct(data)
//        //.then(response => {
//        //    this.setState({
//        //        name: response.name,
//        //        qnty: response.qnty
//        //    });
//        //    console.log(response.data);
//        //})
//        //.catch(e => {
//        //    console.log(e);
//        //})
//    }
//  
//    render () {
//      return (
//        <div className="modal fade" id="popModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//          <div className="modal-dialog modal-dialog-centered">
//            <div className="modal-content">
//              <div className="modal-header">
//                <h5 className="modal-title" id="exampleModalLabel">Product detail</h5>
//                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//              </div>
//              <div className="modal-body">
//                <div className="row g-3">
//                  <div className="col">
//                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" value={this.state.name} onChange={this.onNameChange} />
//                  </div>
//                  <div class="col">
//                    <input type="text" className="form-control" placeholder="Qnty" aria-label="Qnty" value={this.state.qnty} onChange={this.onQntyChange} />
//                  </div>
//                </div>
//              </div>
//              <div class="modal-footer">
//                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.saveProduct}>Save</button>
//              </div>
//            </div>
//          </div>
//        </div>
//      )
//    }
//  }
//  
//  export default AddItem;


const AddItem = () => {
    const [ newName, setNewName ] = useState();
    const [ newQnty, setNewQnty ] = useState();

    useEffect(() => {}); 

    const saveProduct =() => {
      var data = {
        name: newName,
        qnty: newQnty
      };
      console.log(data)
      ListDataService.postProduct(data)
    }

        return (
          <div className="modal fade" id="popModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Product detail</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name"  onChange={(e) => {setNewName(e.target.value)}} />
                  </div>
                  <div class="col">
                    <input type="text" className="form-control" placeholder="Qnty" aria-label="Qnty"  onChange={(e) => {setNewQnty(e.target.value)}} />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {saveProduct()}}>Save</button>
              </div>
            </div>
          </div>
        </div>
        )
   }

   export default AddItem;