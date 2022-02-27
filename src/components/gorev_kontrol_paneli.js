import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {DataGridPro, GridToolbar, LicenseInfo} from '@mui/x-data-grid-pro';
import {useDemoData} from '@mui/x-data-grid-generator';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Typography} from "@mui/material";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SelectUnstyled, {selectUnstyledClasses} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {optionUnstyledClasses} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import Divider from '@mui/material/Divider';


const AntDesignStyledDataGridPro = styled(DataGridPro)(({theme}) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
            display: 'none',
        },
        '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
            borderRight: `1px solid ${
                theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: `1px solid ${
                theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        },
        '& .MuiDataGrid-cell': {
            color:
                theme.palette.mode === 'light'
                    ? 'rgba(0,0,0,.85)'
                    : 'rgba(255,255,255,0.65)',
        },
        '& .MuiPaginationItem-root': {
            borderRadius: 0,
        },
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${
                theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
            }`,
            borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
        },
    },
}));

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    height: 252,
    width: '100%',
    '& .MuiFormGroup-options': {
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
        '& > div': {
            minWidth: 100,
            margin: theme.spacing(2),
            marginLeft: 0,
        },
    },
}));

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledButton = styled('button')(
    ({theme}) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: 96%;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em;
  padding-right: 10px;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
    ({theme}) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  width: 110%;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
    ({theme}) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
    const components = {
        Root: StyledButton,
        Listbox: StyledListbox,
        Popper: StyledPopper,
        ...props.components,
    };

    return <SelectUnstyled {...props} ref={ref} components={components}/>;
});

const bos_buttons = [
    <Button key="one">(Atanmadı)</Button>,
    <Button key="two">(Atanmadı)</Button>,
    <Button key="three">(Atanmadı)</Button>,
];
const normal_buttons = [
    <Button key="one" color={"success"}>Başlat</Button>,
    <Button key="two" color={"warning"}>Durdur</Button>,
    <Button key="three" color={"error"}>Kapat</Button>,
];

function GroupButton() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                {bos_buttons}
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
            >
                {bos_buttons}
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                {normal_buttons}
            </ButtonGroup>
        </Box>
    );
}

const Root = styled('div')(({theme}) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: 8,

    },
}));

export default function GorevKontrolPaneli() {
    const [isAntDesign, setIsAntDesign] = React.useState(false);
    const [type, setType] = React.useState('Commodity');
    const [size, setSize] = React.useState(50);

    const columns = [
        {field: 'id', headerName: 'ID', width: 50},
        {
            field: 'gorev', headerName: 'Fonksiyon', editable: true, type: 'singleSelect', minWidth: 170,
            valueOptions: [
                'Seçili Konuma Git',
                '....'
            ],
        },
        {field: 'enlem', headerName: 'Enlem', type: 'number', editable: true, width: 100},
        {field: 'boylam', headerName: 'Boylam', type: 'number', editable: true, width: 100},
        {field: 'yukseklik', headerName: 'Yükseklik', type: 'number', editable: true, width: 100},

    ];
    const rows = [
        {id: 1, gorev: 'Seçili Konuma Git', enlem: 35.6565, boylam: 54.6546, yukseklik: 14},
        {id: 2, gorev: 'Seçili Konuma Git', enlem: 32.6845, boylam: 31.9865, yukseklik: 14},
        {id: 3, gorev: 'Seçili Konuma Git', enlem: 31.9865, boylam: 32.6845, yukseklik: 14},
        {id: 4, gorev: 'Seçili Konuma Git', enlem: 34.4652, boylam: 35.6565, yukseklik: 14},
        {id: 5, gorev: 'Seçili Konuma Git', enlem: 35.6565, boylam: 34.4652, yukseklik: 14},
    ];

    const [pagination, setPagination] = React.useState({
        pagination: false,
        autoPageSize: false,
        pageSize: undefined,
    });

    const getActiveTheme = () => {
        return isAntDesign ? 'ant' : 'default';
    };

    const DataGridComponent = isAntDesign ? AntDesignStyledDataGridPro : DataGridPro;

    return (
        <Stack
            direction="row"
            sx={{bgcolor: 'background.default'}}
        >
            <StyledBox>
                <DataGridComponent
                    columns={columns}
                    rows={rows}
                    checkboxSelection
                    disableSelectionOnClick
                    rowThreshold={0}
                    hideFooter
                    {...pagination}
                />
            </StyledBox>
            <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing={0}
                sx={{bgcolor: 'background.default'}}
            >
                <Root>
                    <Divider><Typography fontWeight={700}>Seçili Görev</Typography></Divider>
                    <CustomSelect defaultValue={10}>
                        <StyledOption value={10}>Görev_1</StyledOption>
                        <StyledOption value={20}>Görev_2</StyledOption>
                        <StyledOption value={30}>Görev_3</StyledOption>
                    </CustomSelect>
                    <Divider sx={{mt: 20}}><Typography fontWeight={700}>Komutlar</Typography></Divider>
                    <GroupButton/>
                </Root>
            </Stack>
        </Stack>
    );
}
