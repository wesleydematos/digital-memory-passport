import { BsTwitter, BsLink45Deg, BsDownload } from "react-icons/bs";
import { SocialsContainer } from "./style";
import { TwitterShareButton} from 'react-share';
import { saveAs } from 'file-saver'
import { useAlert } from "react-alert";


function SocialsMemorie({link,nome}) {

  const alert = useAlert();

  const downloadImage = () => {
    saveAs(link, nome+'.png')
  }

  const copyLinkImage = () => {
    navigator.clipboard.writeText(link)
    alert.success("Copied link !!");
  }

  return (
    <>
      <SocialsContainer>
        <TwitterShareButton
            title={"test"}
            url={"https://cafe3ponto0commrjo.xyz/"}
        >
            <BsTwitter color="white"/>
        </TwitterShareButton>
        <button onClick={copyLinkImage}>
          <BsLink45Deg color="white"/>
        </button>
        <button onClick={downloadImage}>
          <BsDownload color="white"/>
        </button>
      </SocialsContainer>
    </>
  );
}

export default SocialsMemorie;
