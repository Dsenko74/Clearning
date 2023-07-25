import { useState, useEffect, useCallback, useMemo } from 'react'
import Header from '../Header';
import Initial from '../Initital';
import RoomForm from '../RoomForm';
import ServiceForm from '../ServicesForm';
import UserForm from '../UserForm';
import Finalize from '../Finalize';
import i18n from '../locales/i18n';
import getCurrencyValue from '../servise/GetCurrencyValue';
import './App.scss';

function App() {
	const [step, setStep] = useState('initial');
	const [lng, setLng] = useState('en');
	const [privacyPolicy, setPrivacyPolicy] = useState(false);
	const [roomData, setRoomData] = useState({});
	const [serviceData, setServiceData] = useState({});
	const [userData, setUserData] = useState({});
	const [currency, setCurrency] = useState({});
	const [currencyValue, setCurrencyValue] = useState({});

	useEffect(() => {
		getCurrencyValue()
			.then(res => setCurrencyValue(res));
	}, []);

	const onChangePrivacyPolicy = useCallback((values) => {
		setStep('roomForm');
		setPrivacyPolicy(values.privacyPolicy);
		setCurrency(values.typeOfCurrency)
	}, []);

	const onChangeRoomData = useCallback((values) => {
		setStep('serviceForm');
		setRoomData({...roomData, ...values});
	}, [roomData]);

	const onChangeServiceData = useCallback((values) => {
		setStep('userForm');
		setServiceData({...serviceData, ...values});
	}, [serviceData])

	const onChangeUserData = useCallback((values) => {
		setStep('finalize');
		setUserData({...userData, ...values});
	}, [userData])
	
	const renderComponent = useMemo(() => {
		switch(step) {
			case 'initial':
				return <Initial 
									onChangePrivacyPolicy={onChangePrivacyPolicy}/>;
			case 'roomForm': 
				return <RoomForm 
									onChangeRoomData={onChangeRoomData}/>;
			case 'serviceForm':
				return <ServiceForm 
									onChangeServiceData={onChangeServiceData}/>;
			case 'userForm'	:
				return <UserForm 
									onChangeUserData={onChangeUserData}/>;
			case 'finalize'	:
				return <Finalize 
									setStep={setStep}
									roomData={roomData}
									serviceData={serviceData}
									userData={userData}
									currency={currency}
									currencyValue={currencyValue}
									/>;
			default:
				return <Initial 
									onChangePrivacyPolicy={onChangePrivacyPolicy}/>;
		}
	}, [step, lng]);

	return (
		<div className="App">
			<Header 
				lng={lng} 
				setLng={setLng}/>	
			{renderComponent}
		</div>
	);
}

export default App;
