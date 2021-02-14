import React from 'react';
// import WebMidi from 'webmidi';
import Vex from 'vexflow';

export default function App() {
	// const input = React.useMemo(() => WebMidi.inputs[0], [WebMidi.inputs]);
	const [, setVf] = React.useState<Vex.Flow.Factory>();

	const vex = React.useMemo(() => {
	}, []);

	React.useLayoutEffect(() => {
		const factory = new Vex.Flow.Factory({
			renderer: { elementId: 'renderer' },
		});
		setVf(factory);
		const score = factory.EasyScore();
		const system = factory.System();
		system.addStave({
			voices: [
				// @ts-ignore
				score.voice(score.notes('A4/8, B4/8, C5/8, D5/8, B4/8, G4/8, A4/4')),
			],
		}).addClef('treble').addTimeSignature('4/4');
		factory.draw();
	}, [vex]);

	return (
		<>
			<h1>doo dee doo</h1>
			<div
				id="renderer"
				style={{
					height: '200px',
				}}
			/>
		</>
	);
}
