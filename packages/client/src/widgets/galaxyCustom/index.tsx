import { Modal } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import {
	RightButton,
	SampleScreen,
	Sliders,
	LeftButton,
	TopButton,
} from './ui';
import { useViewStore } from 'shared/store';
import styled from '@emotion/styled';
import { useGalaxyStore, useCustomStore } from 'shared/store';

export default function GalaxyCustom() {
	const navigate = useNavigate();
	const { setView } = useViewStore();
	const galaxy = useGalaxyStore();
	const { spiral, start, thickness, zDist } = useCustomStore();

	const handleSubmit = () => {
		if (galaxy.spiral !== spiral) galaxy.setSpiral(spiral);
		if (galaxy.start !== start) galaxy.setStart(start);
		if (galaxy.thickness !== thickness) galaxy.setThickness(thickness);
		if (galaxy.zDist !== zDist) galaxy.setZDist(zDist);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<Modal
				title="은하 커스텀"
				onClickGoBack={() => {
					navigate('/home');
					setView('MAIN');
				}}
				rightButton={<RightButton />}
				leftButton={<LeftButton />}
				topButton={<TopButton />}
			>
				<Container>
					<SampleScreen />
					<Sliders />
				</Container>
			</Modal>
		</form>
	);
}

const Container = styled.div`
	display: flex;
	gap: 24px;
`;
