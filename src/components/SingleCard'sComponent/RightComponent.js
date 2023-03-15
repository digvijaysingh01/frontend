import '../styles/RightComponent.css';
import jsPDF from 'jspdf';
import { BsFillShareFill } from 'react-icons/bs';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import { BsFillPrinterFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setModal } from '../flashCardSlicer/flashCardSlice';

const RightComponent = ({ filteredCard }) => {

    const dispatch = useDispatch();

    // A function which returns the hard coded values for A4 size pdf.
    // By making a seprate function we can use it in download and print functions
    // without writing the whole code again and also both functons will do the expected job
    
    const pdfDoc = () => {
        var doc = new jsPDF('portrait', 'px', 'a4', 'true');
        doc.text(30, 20, `Group Name : ${filteredCard[0].card.groupName}`);

        var description = `Description : ${filteredCard[0].card.description}`;
        var strArr = doc.splitTextToSize(description, 400);
        doc.text(strArr, 30, 40);

        doc.text(30,335,`Term : ${filteredCard[0].card.term[0].termName}`);
        var defination = `Defination : ${filteredCard[0].card.term[0].termDefination}`;
        var strArr2 = doc.splitTextToSize(defination , 400);
        doc.text(strArr2 , 30 , 350 );

        doc.addImage(`${filteredCard[0].card.groupImg}` , 'jpg' ,35,430,180,200);
        doc.addImage(`${filteredCard[0].card.termImg}` , 'jpg' ,240,430,180,500);
        return doc;
    }

    // This will make all details fit in a A4 size with hard codded values
    const handelDownload = () => {
        var doc = pdfDoc();
        doc.save(`${filteredCard[0].card.groupName}.pdf`);
    }

    // This will open a new window to print the pdf
    const handelPrint = () => {
        var doc = pdfDoc();
        doc.autoPrint();
        // this will open the print page in new window
        doc.output('dataurlnewwindow');
    }

    return (
        <div className='flex flex-wrap flex-col' id='buttonDiv'>

            {/* Share Button with icon */}
            <div>
                <button className='flex bg-white py-2 px-4 font-medium rounded
                block w-[90%] m-auto shadow-lg hover:bg-opacity-20'
                id='button'
                onClick={() => dispatch(setModal())} >
                    <BsFillShareFill className='mt-1' />
                    <p className='ml-6 '>
                        Share
                    </p>
                </button>
            </div>

            {/* Download Button with icon */}
            <div>
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block
                w-[90%] m-auto shadow-lg hover:bg-opacity-20'
                id='button'
                onClick={handelDownload}>
                    <BsFillCloudDownloadFill className='mt-1' />
                    <p className='ml-2 2xl:ml-6'>
                        Download
                    </p>
                </button>
            </div>

            {/* Print Button with icon */}
            <div>
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block
                w-[90%] m-auto shadow-lg hover:bg-opacity-20'
                id='button'
                    onClick={handelPrint}>
                    <BsFillPrinterFill className='mt-1'/>
                    <p className='ml-6'>
                        Print
                    </p>
                </button>
            </div>
        </div>
    )
}

export default RightComponent
