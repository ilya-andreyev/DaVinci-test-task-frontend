import * as Style from './styled';

const Header = () => (
  <Style.Wrapper>
    <Style.WrapperTopMenu>
      <Style.LeftMenu>
        <Style.A>Home</Style.A>
        <Style.A>My page</Style.A>
        <Style.A>Projects</Style.A>
        <Style.A>Timesheet</Style.A>
        <Style.A>Help</Style.A>
      </Style.LeftMenu>
      <Style.RightMenu>
        <Style.Span>Logged in as</Style.Span>
        <Style.A>i.andreyev</Style.A>
        <Style.A>My account</Style.A>
        <Style.A>Sign out</Style.A>
      </Style.RightMenu>
    </Style.WrapperTopMenu>
    <Style.WrapperHeader>
      <Style.H3>Syberry Academy (E06)</Style.H3>
      <Style.Navigation>
        <Style.Paragraph>+</Style.Paragraph>
        <Style.Link>Overview</Style.Link>
        <Style.Link>Activity</Style.Link>
        <Style.Link>Roadmap</Style.Link>
        <Style.Link>Issues</Style.Link>
        <Style.Link>Spent time</Style.Link>
        <Style.Link>Gantt</Style.Link>
        <Style.Link>Agile</Style.Link>
        <Style.Link active>Dashboard</Style.Link>
        <Style.Link>Backlog</Style.Link>
        <Style.Link>Wiki</Style.Link>
        <Style.Link>Files</Style.Link>
        <Style.Link>Settings</Style.Link>
      </Style.Navigation>
    </Style.WrapperHeader>
  </Style.Wrapper>
);

export default Header;
