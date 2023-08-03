export default function FormUpload() {
    const onSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append('asefile', event.target.asefile.files[0]);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        console.log('Uploaded successfully!');
      } else {
        console.log('Upload failed');
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="file" id="asefile" name="asefile" />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
  