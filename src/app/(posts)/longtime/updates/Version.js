import X from 'src/component/X';
import './Version.css';

export default function Version(props) {
    const {version} = props;
    return (
        <X.HighlightBlock>
            <X.FlexRow justifyContent="space-around" alignItems="center">
                <X.Image id="cheer-gif" src="cheer.gif" />
                <div id="current-version">Ver {version}</div>
                <X.Image id="dance-gif" src="dance.gif" />
            </X.FlexRow>
        </X.HighlightBlock>
    );
}
