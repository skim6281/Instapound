import React from 'react';

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
    this.setState({caption: e.target.value});
  }

  updateLocation(e){
    this.setState({location: e.target.value});
  }

  updateFile() {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  handleSumit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image[caption]", this.state.caption);
    formData.append("image[location]", this.state.location);
    formData.append("image[photo]", this.state.imageFile);
    this.props.createImage(formData);
  }

  render() {
    return (
      <main>
        <input type="text" onChange={this.updateCaption}/>
        <input type="text" onChange={this.updateLocation}/>
        <input type="file" onChange={this.updateFile} />
        <button onClick={this.handleSubmit}>Upload</button>
        <img src={this.state.imageUrl}/>
      </main>
    )
  }
}
