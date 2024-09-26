import * as React from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Props } from '../types/Props';
const Control = ({ callback }: Props) => {



	const {
		transcript,
		listening,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();
	React.useEffect(() => {
		callback(transcript);
	}, [transcript])

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	return (
		<>
			<div className="input-container">
				<input type="text" placeholder="Speak or type here..." value={transcript} />
				{
					!listening &&
					<svg onClick={() => {
						SpeechRecognition.startListening({ continuous: true });
					}} className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" stroke-width="0">
						</g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
						</g>
						<g id="SVGRepo_iconCarrier">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 7.33303V11.222C14.7728 12.4877 13.7657 13.5325 12.5 13.556C11.2343 13.5325 10.2271 12.4877 10.25 11.222V7.33303C10.2277 6.06772 11.2347 5.02357 12.5 5.00003C13.7653 5.02357 14.7723 6.06772 14.75 7.33303Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							</path>
							<path d="M8.46233 13.8534C8.13618 13.5981 7.66478 13.6555 7.40945 13.9817C7.15411 14.3078 7.21152 14.7792 7.53767 15.0346L8.46233 13.8534ZM17.4623 15.0346C17.7885 14.7792 17.8459 14.3078 17.5906 13.9817C17.3352 13.6555 16.8638 13.5981 16.5377 13.8534L17.4623 15.0346ZM13.25 16C13.25 15.5858 12.9142 15.25 12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16H13.25ZM11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75C12.9142 19.75 13.25 19.4142 13.25 19H11.75ZM7.53767 15.0346C10.4524 17.3164 14.5476 17.3164 17.4623 15.0346L16.5377 13.8534C14.1661 15.7101 10.8339 15.7101 8.46233 13.8534L7.53767 15.0346ZM11.75 16V19H13.25V16H11.75Z" fill="#000000">
							</path>
						</g>
					</svg>
				}
				{
					listening &&
					<svg onClick={() => {
						SpeechRecognition.stopListening();
					}} className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" stroke-width="0">
						</g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
						</g>
						<g id="SVGRepo_iconCarrier">
							<path d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z" fill="#000000">
							</path>
							<path d="M14.5 8H9.5C8.67157 8 8 8.67157 8 9.5V14.5C8 15.3284 8.67157 16 9.5 16H14.5C15.3284 16 16 15.3284 16 14.5V9.5C16 8.67157 15.3284 8 14.5 8Z" fill="#000000">
							</path>
						</g>
					</svg>
				}
			</div>
		</>
	)
}

export default Control