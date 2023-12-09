/// <reference types="vite-plugin-svgr/client" />
import { router } from 'app/Router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from 'shared/ui/styles/theme';
import './global.css';
import { AxiosInterceptor } from 'shared/apis/AxiosInterceptor';
import Audio from 'features/audio/Audio';
import AudioButton from 'shared/ui/audioButton/AudioButton';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Audio />
			<AudioButton />
			<AxiosInterceptor>
				<RouterProvider router={router} />
			</AxiosInterceptor>
		</ThemeProvider>
	</React.StrictMode>,
);
