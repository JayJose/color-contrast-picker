import multer from 'multer';

//const upload = multer({ dest: '/tmp' }); // replace '/tmp' with your desired path
const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,  // multer handles the body parsing
  },
};

import aseUtil from 'ase-util';

export default async (req, res) => {
  if (req.method === 'POST') {
    upload.single('asefile')(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.error(err);
        return res.status(500).json({ error: err });
      } else if (err) {
        // An unknown error occurred when uploading.
        console.error(err);
        return res.status(500).json({ error: err });
      }

      // Everything went fine and file uploaded
      // req.file is the `asefile` file

      // Your logic to parse the ASE file and do whatever you want
    //   console.log('aseutil', aseUtil)
    // var result = ase.read(fs.readFileSync("myfile.ase"));
    

    const fileBuffer = req.file.buffer;
    const swatches = aseUtil.read(fileBuffer);
    const colors = []
    swatches[0].entries.map((swatch) => {
        colors.push(swatch.name)
    })
    
      return res.json({ colors: colors });
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
