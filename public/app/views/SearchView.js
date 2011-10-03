NotesApp.views.SearchView = Ext.extend(Ext.form.FormPanel, {

    initComponent: function () {

        this.addButton = new Ext.Button({
            text: 'Add',
            ui: 'action',
            handler: this.saveButtonTap,
            scope: this
        });

        this.searchButton = new Ext.Button({
            text: 'Search',
            ui: 'action',
            handler: this.doSearch,
            scope: this
        });

        this.trashButton = new Ext.Button({
            iconCls: 'trash',
            iconMask: true,
            handler: this.trashButtonTap,
            scope: this
        });

        this.topToolbar = new Ext.Toolbar({
            title: 'Field Contacts',
            /*items: [
             { xtype: 'spacer' },
             this.addButton
             ]*/
        });

        this.bottomToolbar = new Ext.Toolbar({
            dock: 'bottom',
            items: [
                { xtype: 'spacer' },
                this.searchButton
            ]
        });

        this.dockedItems = [this.topToolbar, this.bottomToolbar];

        fields = {
            xtype: 'fieldset',
            id: 'userFormFieldset',
            title: 'Search Contacts',
            instructions: "Please enter search criteria",
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: false,
                useClearIcon: true,
                autoCapitalize : false
            },
            items: [
                {
                    name: 'state',
                    label: 'State',
                    xtype: 'selectfield',
                    options: [
                        {
                            text: 'North Carolina',
                            value: 'NC'
                        },
                        {
                            text: 'New York',
                            value: 'NC'
                        },
                        {
                            text: 'New Jersey',
                            value: 'NJ'
                        }
                    ]
                },
                {
                    name: 'city',
                    label: 'City',
                    xtype: 'selectfield',
                    options: [
                        {
                            text: 'Durham',
                            value: 'durham'
                        },
                        {
                            text: 'Greensboro',
                            value: 'Greensboro'
                        },
                        {
                            text: 'Raleigh',
                            value: 'Raleigh'
                        }
                    ]
                },
                {
                    name: 'office',
                    label: 'Office',
                    xtype: 'selectfield',
                    options: [
                        {
                            text: 'Office 1',
                            value: 'durham'
                        },
                        {
                            text: 'Greensboro',
                            value: 'Greensboro'
                        },
                        {
                            text: 'Raleigh',
                            value: 'Raleigh'
                        }
                    ]
                }
            ]
        }
        this.items = fields;

        NotesApp.views.SearchView.superclass.initComponent.call(this);
    },

    backButtonTap: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'canceledit'
        });
    },

    saveButtonTap: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'savenote'
        });
    },
    doSearch: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'search'
        });
    },

    trashButtonTap: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'deletenote'
        });
    }
});


