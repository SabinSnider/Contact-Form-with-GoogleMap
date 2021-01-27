import React from 'react';
import './form.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Form extends React.Component{
    
//const ya kina rakna na mileko hola
    constructor(props){
        super(props);
        this.state = {
        fullName: null,
        email: null,
        message: null,
        errors: {
            fullName: '',
            email: '',
            message: '',
        }
    };
    }
    handleChange = (e) => {
        e.preventDefault();
        // let name = e.target.name;
        // let email = e.target.email;
        // let phone = e.target.phone;
        const {name, value} = e.target;
        let errors = this.state.errors;

        switch(name) {
            case 'fullName':
                errors.fullName = value.length < 5 ? 'Full Name must be longer than 5 characters' : '';
            break;

            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not Valid.';
            break;

            case 'message':
                errors.message = value.length < 5 ? 'Message is less than 5 characters': '';
            break;

            default:
                break;
        }
        this.setState({errors, [name]: value}, ()=>{
            console.log(errors)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }


    render() {
        const {errors} = this.state;
        return (
                <div className="wrapper">  
                    <div className="form-wrapper">
                        <h2> We'd love to hear from you</h2>

                        <form onSubmit={this.handleSubmit}>
                            <div className='email'>
                                <label htmlFor="email"> Email :</label>
                                <input type='email' name='email' onChange={this.handleChange}/>
                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                            </div>
                           
                            <div className='fullName'>
                               <label htmlFor="fullName"> Name :</label>
                               <input type="text" name="fullName" onChange={this.handleChange}/>
                               {errors.fullName.length > 0 && <span className='error'>{errors.fullName}</span>}
                            </div>
                            
                            <div className='message'>
                                <label htmlFor="message"> Message</label>
                                <textarea type="text" name="message" onChange={this.handleChange}></textarea>
                                {errors.message.length > 0 && <span className='error'>{errors.message}</span>}
                            </div>
                            <div className='submit'>
                                <button> Submit!</button>
                            </div>

                        </form>
                    </div>  
                </div>

            );
    }
}

export default Form;