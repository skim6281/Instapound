import React from 'react';
import { hashHistory } from 'react-router';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      location: "",
      imageFile: null,
      imageUrl: null
    };
    this.updateCaption = this.updateCaption.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCaption(e){
    this.setState({caption: e.currentTarget.value});
  }

  updateLocation(e){
    this.setState({location: e.currentTarget.value});
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image[caption]", this.state.caption);
    formData.append("image[location]", this.state.location);
    formData.append("image[photo]", this.state.imageFile);
    this.props.createImage(formData);
    this.props.closeUploadModal();
  }

  render() {
    return (
      <main className="image-form">
        <section className="image-field">
          <img src={this.state.imageUrl}/>
        </section>
        <section className="image-form-inputs">
          <div className="image-input-fields">
            <input
              className="choose-file"
              type="file"
          
              onChange={this.updateFile} />
            <input className="upload-modal-text-input" type="text" onChange={this.updateCaption} placeholder="Write a caption..."/>
            <input className="upload-modal-text-input" type="text" onChange={this.updateLocation}placeholder="Add a location..."/>
          </div>
          <div>
            <button className="share-button" onClick={this.handleSubmit}>Share</button>
          </div>
        </section>

        <button className="exit" onClick={this.props.closeUploadModal}>
          <img src={window.images.exit}/>
        </button>
      </main>
    )
  }
}

export default ImageForm;
