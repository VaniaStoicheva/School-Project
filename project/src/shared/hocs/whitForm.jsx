import React from 'react';

export default function withForm(Cmp, initialState, schema) {
  return class extends React.Component {

    state = {
      form: initialState,
      errors: undefined
    };

    
     controlChangeHandlerFactory = name =>{
       let id;
        return e  => {
          const newValue = e.target.value;
          if(id){clearTimeout(id); id=null;}
          id=setTimeout(()=>{
            this.setState(({ form }) => {
              return { form: { ...form, [name]: newValue } };
         });
         id=null;
          },300)
   
        };
     }; 
   
   
     getFormState = () => {
      return this.state.form;
    }
    getFormErrorState = () => {
      return this.state.errors;
    }
   runValidation=()=>{
    return schema.validate(this.state.form,{abortEarly:false})
    .then(()=>{
      this.setState({errors:undefined});
      return this.state.form;
    })
    .catch(err=>{
    const errors= err.inner.reduce((acc,{path,message})=>{
      acc[path]=(acc[path] || []).concat(message);
      return acc;
     },{});
     this.setState({errors})
    });

   }

    render() {
      return <Cmp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory} getFormState={this.getFormState} runValidation={this.runValidation} getFormErrorState={this.getFormErrorState}></Cmp>
    }
  }
}