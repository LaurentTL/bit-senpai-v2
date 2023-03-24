import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import GradientText from '../components/utility/gradient-text/GradientText';

describe('Logo component', () => {
    test('It display the Logo', () => {
        render(<GradientText words="hello" />);
    });
});
