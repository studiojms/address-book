import { configure } from 'enzyme';
import EnzymeReact16Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new EnzymeReact16Adapter() });
