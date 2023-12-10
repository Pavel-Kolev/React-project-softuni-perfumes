import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { Form,Button } from "react-bootstrap"


export default function CommentSender({onSubmit,values,ErrorHandleShow,onChange}){

const {isAuthenticated}=useContext(AuthContext)


    return(
      <>{isAuthenticated&& <div className="container-form-comment">
      <Form onSubmit={onSubmit}>
         
        
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>
            Delivery details-address,contacts and other
            specifications
          </Form.Label>
          <Form.Control
            as="textarea"
            onChange={onChange}
            name="additionalInfo"
            rows={3}
            value={values.additionalInfo}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput2"
        >
          <Form.Label>Counter-Offer</Form.Label>
          <Form.Control
            type="counterPrice"
            onChange={onChange}
            name="counterPrice"
            placeholder="100$"
            value={values.counterPrice}
          />
        </Form.Group>{isAuthenticated&&<Button
          variant="primary"
          type="submit"
          onClick={ErrorHandleShow}
        >
          Submit
        </Button>}
       
        
      </Form> </div>}
  </>  )
    
}