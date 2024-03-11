import React, { useState, useEffect } from "react";
import { Counter } from "../../Counter/Counter";
import 'highlight.js/styles/github.css';
import Accordion from "../Accordion/index.jsx";
import MyButton from "../Button";
import MyButtonOk from "../ButtonOk";
import MyButtonKo from "../ButtonKo";
import MyButtonAlert from "../ButtonAlert";
import MyInput from "../Input";
import MyModal from "../MyModal";
import RoundedBtn from "../RoundedBtn";
import BasicDropDown from "../BasicDropDown";
import FullWithTab from "../Tabs/FullWidthTab";
import SlideOver from "../SlideOver";
import ButtonGroupsBasic from "../../../components/Buttons/ButtonGroupsBasic";
import ButtonGroupsIconOnly from "../../../components/Buttons/ButtonGroupsIconOnly";
import ButtonGroupsWithDropDown from "../../../components/Buttons/ButtonGroupsWithDropDown";
import ButtonRadio from "../../../components/Buttons/ButtonRadio";
import InputBis from "../../../components/MyInput";
import ModalSuccess from "../../../components/Modal/ModalSuccess";
import ModalAlert from "../../../components/Modal/ModalAlert";
import TabBarWithUnderline from "../../../components/Tabs/TabBarWithUnderline";
import TabBarFullWidthWithUnderline from "../../../components/Tabs/TabBarFullWidthWithUnderline";
import SelectMenu from "../../../components/SelectMenus/SelectMenu";
import ComboBox from "../../../components/Comboxes/Combox.jsx";
import Toggle from "../../../components/Toggle/ToggleValid";
import ToggleUnvalid from "../../../components/Toggle/ToggleUnvalid";
import Checkbox from "../../../components/Checkbox/Checkbox";
import DragAndDrop from "../../../components/DragAndDrop/DragAndDrop";
import Textarea from "../../../components/Textareas/Textarea";
import RadioGroup from "../../../components/RadioGroups/RadioGroup";
import { Audio, Bars, Grid, InfinitySpin, Oval, RevolvingDot, RotatingLines } from  'react-loader-spinner';
import Header from "../Header";
import '../library.scss';


const ComponentsLibrary = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [slideOpen, setSlideOpen] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(cssStyle);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleOpenSlide = () => {
        setSlideOpen(true);
    };
    
    return <div className="main-container">

        <div className="mainComponent-container">
            <Accordion title="Buttons and Badges"> 
                <div className="block-galery">
                    <div className="component-container">
                        <MyButton content="Classic Btn" />
                        <RoundedBtn />
                        <ButtonGroupsBasic />
                        <ButtonGroupsIconOnly />
                        <ButtonGroupsWithDropDown />
                        <ButtonRadio id="00" title="radio-btn"/>
                        <MyButtonOk content="Validation"/>
                        <MyButtonKo content="Negation"/>
                        <MyButtonAlert content="Alert"/>
                    </div>
                </div>
            </Accordion>
            <Accordion title="Input"> 
                <div className="block-galery">
                    <div className="component-container">
                        <MyInput />
                        <InputBis />
                    </div>
                </div>   
            </Accordion>
            <Accordion title="Modal">
                <div className="block-galery">
                    <div className="component-container">
                        <button className="primaryBtn-cerfrance" onClick={handleOpenModal}>Open Modal</button>
                        {isModalOpen && <><MyModal setIsModalOpen={setIsModalOpen} /> <ModalAlert setIsModalOpen={setIsModalOpen} /> <ModalSuccess setIsModalOpen={setIsModalOpen} /></>}
                    </div>
                </div>
            </Accordion>
            <Accordion title="DropDown"> 
                <div className="block-galery">
                    <div className="component-container">
                        <BasicDropDown />
                    </div>
                </div> 
            </Accordion>
            <Accordion title="Tabs">
                <div className="block-galery">
                    <div className="component-container">
                        <FullWithTab />
                        <TabBarWithUnderline />
                        <TabBarFullWidthWithUnderline />
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Slide overs">
                <div className="block-galery">
                    <div className="component-container">
                        <button className="primaryBtn-cerfrance" onClick={handleOpenSlide}>Open Slide</button>
                        { slideOpen && <SlideOver setSlideOpen={setSlideOpen} slideOpen={slideOpen} />}
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Loader">
                <div className="block-galery">
                    <div className="component-container">
                        <Audio type="Audio" color="#00BFFF" height={80} width={80} />
                        <Bars />
                        <Grid />
                        <InfinitySpin />
                        <Oval />
                        <RevolvingDot />
                        <RotatingLines />
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Select Menus">
                <div className="block-galery">
                    <h2>Select menus</h2>
                    <div className="component-container">
                        <SelectMenu />
                    </div> 
                    <h2>ComboBoxes</h2>
                    <p>Select menu + input</p>
                    <div className="component-container">
                        <ComboBox />
                    </div>    
                </div>
            </Accordion>
            <Accordion title="Toggle">
                <div className="block-galery">
                    <div className="component-container">
                        <Toggle />
                        <ToggleUnvalid />
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Checkboxes">
                <div className="block-galery">
                    <div className="component-container">
                        <Checkbox />
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Drag and Drop">
                <div className="block-galery">
                    <div className="component-container">
                        <DragAndDrop />
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Textareas">
                <div className="block-galery">
                    <div className="component-container">
                        <Textarea />
                    </div>   
                </div>
            </Accordion>
            <Accordion title="Radio Groups">
                <div className="block-galery">
                    <div className="component-container">
                        <RadioGroup />
                    </div>   
                </div>
            </Accordion> 
        </div>
    </div>;
};

export default ComponentsLibrary;