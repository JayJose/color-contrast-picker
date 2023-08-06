import {
  Button,
  Input,
  HStack,
} from '@chakra-ui/react'

export default function FormUpload({setColors}) {
    const onSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append('asefile', event.target.asefile.files[0]);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      }).then(response => response.json())
      .then(data => {
        setColors(data.colors);
      });
    };
  
    return (
        <HStack alignSelf={"center"} mt={2}>
        <form onSubmit={onSubmit}>
          <input type="file" id="asefile" name="asefile" />
          <Button
            size="sm"
            alignSelf={"right"}
            bg={"blue.500"}
            type={"submit"}
            color="white">
              Upload
          </Button>
        </form>
        </HStack>
    );
  }