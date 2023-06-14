import React, {useState} from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateNewNFT.module.scss';
import Input from '../Input/Input';
import Select from 'react-select';
import Link from 'next/link';
import Image from 'next/image';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function CreateNewNFT() {
    const [name, setName] = useState('');
    // const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
    //   setFile(file);
      console.log(file); 
    };

    const optionsthree = [
        { value: 'New Collection', label: 'New Collection' },
        // { value: 'Bring Me the Open Space', label: 'Bring Me the Open Space' },
        // { value: 'Bring Me the Open Space', label: 'Bring Me the Open Space' },
      ];
      const optionsone = [
        { value: 'Napa NAPA', label: <div className='cstm_napa_slct'><Image src="/img/napa_ic.svg" alt="" width="24px" height="24px" />Ethereum</div> },
        // { value: 'Napa NAPA', label: <div className='cstm_napa_slct'><Image src="/img/napa_ic.svg" alt="" width="24px" height="24px" />Napa NAPA</div> },
        // { value: 'Napa NAPA', label: <div className='cstm_napa_slct'><Image src="/img/napa_ic.svg" alt="" width="24px" height="24px" />Napa NAPA</div> },
      ];
  return (
    <>
        <div className={styles.CreateNewNFT}>
            <div className={styles.CustmGridNFT}>
                <div className={styles.GeneralPool}>
                    <h5 className={styles.DefultPoolh5}>General</h5>
                    <div className={styles.InputAllPool}>
                        <div className={styles.FrstInput}>
                            <Input
                                value={name}
                                type="text"
                                placeholder=""
                                label="SNFT Title"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.TextArea}>
                            <p>SNFT Description</p> 
                            <textarea></textarea>
                        </div>
                        <div className={styles.FrstInput}>
                            <Input
                                value={name}
                                type="text"
                                placeholder="https://"
                                label="External link"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.BottmDateExprstio}>
                            <div className={styles.MixInputPool}>
                                <div className="selectprntnft">
                                    <p>Collection</p>
                                    <Select
                                        options={optionsthree}
                                        // menuIsOpen={true}
                                        className="select_pernt"
                                        // placeholder="Bring Me the Open Space "
                                        classNamePrefix="cntrslct"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.PropertiesNft}>
                            <h5 className={styles.DefultNfth4}>Properties</h5>
                            <p className={styles.DefultPNft}>Properties show up underneath your item, are clickable, and can be filtered in your collection{"'"}s sidebar.</p>
                            <div className={styles.TwoInptNft}>
                                <div className={styles.FrstInput}>
                                    <Input
                                        value={name}
                                        type="text"
                                        placeholder="Character"
                                        label="Type"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className={styles.FrstInput}>
                                    <Input
                                        value={name}
                                        type="text"
                                        placeholder="Male"
                                        label="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.AddMoreBtn}>
                                <button>
                                    <Image src="/img/plus_ic.png" alt="" width={24} height={24} />
                                    Add More
                                </button>
                            </div>
                        </div>
                        <div className={styles.PropertiesNft}>
                            <h5 className={styles.DefultNfth4}>Stats</h5>
                            <p className={styles.DefultPNft}>Stats show up underneath your item, are clickable, and can be filtered in your collection{"'"}s sidebar.</p>
                            <div className={styles.StartInpt}>
                                <div className={styles.FrstInput}>
                                    <Input
                                        value={name}
                                        type="text"
                                        placeholder="Data"
                                        label="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className={styles.RightStartInpt}>
                                    <div className={styles.FrstInput}>
                                        <Input
                                            value={name}
                                            type="text"
                                            placeholder="3"
                                            label="Value"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <span>of</span>
                                    <div className={styles.FrstInput}>
                                        <Input
                                            value={name}
                                            type="text"
                                            placeholder="8"
                                            label=""
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.AddMoreBtn}>
                                <button>
                                    <Image src="/img/plus_ic.png" alt="" width={24} height={24} />
                                    Add More
                                </button>
                            </div>
                        </div>
                        {/* <div className={styles.PropertiesNft}>
                            <h5 className={styles.DefultNfth4}>Supply</h5>
                            <p className={styles.DefultPNft}>The number of items that can be minted. No gas cost to you!</p>
                            <div className={styles.FrstInput}>
                                <Input
                                    value={name}
                                    type="text"
                                    placeholder="125"
                                    label="Number"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div> */}
                        {/* </div> */}
                        <div className={styles.PropertiesNft}>
                            <h5 className={styles.DefultNfth4}>Blockchain</h5>
                            <div className={styles.BottmDateExprstio}>
                                <div className={styles.MixInputPool}>
                                    <div className="selectprntnft">
                                        <p>Select</p>
                                        <Select
                                            options={optionsone}
                                            // menuIsOpen={true}
                                            className="select_pernt"
                                            placeholder="Ethereum"
                                            classNamePrefix="cntrslct"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.DefltBtn}>
                            <Link href="/snft-details"><a>Create</a></Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.RightNftMain}>
                <div className={styles.RightVideoNft}>
                    <h5 className={styles.DefultNfth4}>Vidoe or Image</h5>
                    <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM</p>
                    <div className={styles.RightVideo}>
                            <Image src="/img/upload_icon.png" alt="" width={51} height={32} />
                            <h4>Drag and drop an file, or <span>Browse</span></h4>
                            <p>Max size 100 MB</p>
                            <div className='mnflupld'>
                                <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={true} />
                            </div>
                            
                    </div>
                    
                    {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
                </div>
                <div className={styles.PropertiesNft}>
                    <h5 className={styles.DefultNfth4}>Levels</h5>
                    <p className={styles.DefultPNft}>Levels show up underneath your item, are clickable, and can be filtered in your collection{"'"}s sidebar</p>
                    <div className={styles.StartInpt}>
                        <div className={styles.FrstInput}>
                            <Input
                                value={name}
                                type="text"
                                placeholder="Speed"
                                label="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.RightStartInpt}>
                            <div className={styles.FrstInput}>
                                <Input
                                    value={name}
                                    type="text"
                                    placeholder="4"
                                    label="Value"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <span>of</span>
                            <div className={styles.FrstInput}>
                                <Input
                                    value={name}
                                    type="text"
                                    placeholder="10"
                                    label=""
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.AddMoreBtn}>
                        <button>
                            <Image src="/img/plus_ic.png" alt="" width={24} height={24} />
                            Add More
                        </button>
                    </div>
                </div>
                <div className={styles.PropertiesNft}>
                    <h5 className={styles.DefultNfth4}>Other Options</h5>
                    <div className='nft_last_switch'>
                        <div className='switchpool switchnft'>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <div className='other_opation_label'>
                                    <label className="form-check-label frst_labelnft" htmlFor="flexSwitchCheckDefault">Unlockable Content</label>
                                    <label className="form-check-label scnd_labelnft" htmlFor="flexSwitchCheckDefault">Unlockable content is only open to the owner of the item.</label>
                                </div>
                            </div>
                        </div>
                        <div className='switchpool switchnft'>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <div className='other_opation_label'>
                                    <label className="form-check-label frst_labelnft" htmlFor="flexSwitchCheckDefault">Explicit & Sensitive Content</label>
                                    <label className="form-check-label scnd_labelnft" htmlFor="flexSwitchCheckDefault">Set this item as explicit and sensitive content</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>            
    </>
  )
}
