import X from 'src/component/X';
import './Version.css';

export default function Version() {
    return (
        <X.HighlightBlock>
            <X.FlexRow justifyContent="space-around">
                <X.Image id="cheer-gif" src="cheer.gif" />
                <div id="current-version">Version 3.1</div>
                <X.Image id="dance-gif" src="dance.gif" />
            </X.FlexRow>
        </X.HighlightBlock>
    );
}
