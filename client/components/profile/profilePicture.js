import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';
import ProfilePic from '../common/commonProfilePicture';

const form =  reduxForm({
    form: 'profilePicture',
    fields: [ 'summary'],
    // validate
});

class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            data_uri: null,
            processing: false,
            // filename: "",
            // filetype: ""
        };
        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            },
            listItem: {
                marginTop: "40px",
                borderRadius: 0,
                borderBottom: "2px solid #FAFAFA"
            },
            imageStyle: {
                width:"150px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid lightgrey",
            }
        }
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.updateProfile(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('file:', this.state);
        let data = {
            data_uri: this.state.data_uri,
            filename: this.state.filename,
            filetype: this.state.filetype
      }
      this.props.handleProfilePicture(data);
      this.toggleEditing();
    }

    handleFile(e) {
       const reader = new FileReader();
       const file = e.target.files[0];

       reader.onload = (upload) => {
         this.setState({
           data_uri: upload.target.result,
           filename: file.name,
           filetype: file.type
         });
       };

       reader.readAsDataURL(file);
     }

    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <ProfilePic
                    styles={styles}
                    toggleEditing={this.toggleEditing}
                    data={this.props.data}
                    />
            );
        } else {
            return (
                <div className='row text-center'>
                   <div className='col-xs-10 col-xs-offset-1'>
                     <label>Upload an image</label>
                     <form className="list-group-item" onSubmit={this.handleSubmit} encType="multipart/form-data" style={styles.ulStyles}>
                       <input type="file" onChange={this.handleFile} />
                       <input disabled={this.state.processing} className='btn btn-primary' type="submit" value="Upload" />
                     </form>
                   </div>
                 </div>
            );
        }
    }
    toggleEditing(e){
        // e.preventDefault();
        this.setState({editing: !this.state.editing});
    }
    render(){
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

export default connect(null)(form(ProfilePicture));
