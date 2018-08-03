
export default {
    Attributes: {
        'href': {
            'placeholder': 'URL'
        },
        'target': {
            'options': '_blank,_self,_parent,_top'
        }
        ,
        'class': {
            'options': 'sp-field-customFormatBackground,sp-field-severity--good,sp-field-severity--low,sp-field-severity--warning,sp-field-severity--blocked,sp-field-dataBars,sp-field-trending--up,sp-field-trending--down,sp-field-quickAction'
        },
        'iconName': {}
    },
    CSSProperties: {
        'background-color': {
            'placeholder': '#hex -- color'
        },
        'font-size': {
            'placeholder': '18px -- 150% '
        },
        'text-align': {
            'options': 'left,right,center,justify'
        },
        'border': {
            'placeholder': '4px solid black'
        },
        'border-radius': {},
        'font-weight': {
            'options': 'bold,semibold'
        },
        
        'color': {
            'placeholder': '#hex -- color'
        },
        'width': {},
        'max-height': {},
        'overflow': {
            'options': 'scroll,hidden,auto,visible'
        }
    },
    customRowActions: {
        'action': {
            'options': 'executeFlow,share,defaultClick'
        },
        'actionParams': {
            'options': '{\\"id\\": \\"FLOW_ID\\"}'
        }
    },
    customColors: {
        'Transparent': 'transparent',
        'Green': '#98FB98',
        'Yellow': '#FFFF66',
        'Orange': '#FFA450',
        'Red': '#FF6A6A',
        'Blue': '#5078FF',
        'Purple': '#B350FF',
        'Custom': '#'
    },
    template_completedInProgressLate: [
        {
          property: 'background-color',
          value:  [
            {
              operator: '==',
              operand: '@currentField',
              operand2: 'Completed',
              value: '#98fb98'
            },
            {
              operator: '==',
              operand: '@currentField',
              operand2: 'In Progress',
              value: '#FFFF66'
            },
            {
              operator: '==',
              operand: '@currentField',
              operand2: 'Late',
              value: '#ff6a6a'
            }
          ]
        }],
        template_dataBars: {
            attributes: [
                {
                    attribute: 'class',
                    value: 'sp-field-dataBars'
                }
            ],
            properties: [
                {
                    property: 'width',
                    value: '@currentField++%'
                }
            ]
        },
        modalBody_TextContentHelp: `
        <ul class='nav nav-tabs'>
            <li class='active'><a data-toggle='tab' href='#'>Variables</a></li>
            <li><a data-toggle='tab' href='#'>Functions</a></li>
            <li><a href='#'>TEST</a></li>

        </ul>


        <div class="tab-content">
            <div id="Variables" class="tab-pane fade in active">
                <h3>HOME</h3>
                <p>Some content.</p>
            </div>
            <div id="Functions" class="tab-pane fade">
                <h3>Menu 1</h3>
                <p>Some content in menu 1.</p>
            </div>
            <div id="menu2" class="tab-pane fade">
                <h3>Menu 2</h3>
                <p>Some content in menu 2.</p>
            </div>
        </div>

        <b onClick={this.props.newProperty}>@currentField</b> - refers to text in current field. <br>
        <b>@currentField.title</b> - Person fields are represented in the system as objects, and a person’s display name is contained within that object’s title property <br>
        <b>@currentField.lookupValue</b> -  Lookup fields are also represented as objects; the display text is stored in the lookupValue property <br>
        <b>@now</b> - current date/time <br>
        <b>@me</b> - current user's email <br>
        <b>[$FieldName]</b> - refers to value in field on same row <br>
        <b>[$PeoplePicker.email]</b> - refers to email of the person in a people picker field<br>
        People picker field properties: <b>id</b>, <b>title</b>, <b>email</b>, <b>sip</b>, <b>picture</b>
        <br><br>

        Basic math functions (parenthases <b>()</b> are also supported):<br>
        multiply (<b>**</b>), divide (<b>//</b>), add (<b>++</b>), subtract (<b>--</b>)<br><br>

        Functions:<br>
        <b>toString()</b>, <b>Number()</b>, <b>Date()</b>, <b>cos()</b>, <b>sin()</b>,<br>
        <b>toLocaleString()</b> [Displays a date type fully expanded with date and time],<br>
        <b>toLocaleDateString()</b> [Displays a date type with just the date],<br>
        <b>toLocaleTimeString()</b> [Displays a date type with just the time]
        <br><br>
        <br>
        Note: If you have spaces in the field name, those are defined as _x0020_. For example, a field named "Due Date" should be referenced as $Due_x0020_Date.<br><br>
        Note2: Use <b>++</b> to concatenate
        ` 
    
}
