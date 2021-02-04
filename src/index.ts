import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation } from 'api/types';


joplin.plugins.register({
	onStart: async function() {
		const dialogs = joplin.views.dialogs;
		const handle3 = await dialogs.create('myDialog3');
		
		await joplin.commands.register({
			name: 'openDialogBug',
			label: 'Opens Dialog',
			iconName: 'fas fa-file-import',
			execute: async () => {
			
				
				await dialogs.setHtml(handle3, `
				<p>Testing dialog with form elements</p>
				<form name="user">
					Name: <input type="text" name="name" />
					<br/>
					Email: <input type="text" name="email"/>
				</form>
				`);
				
		
				const result3 = await dialogs.open(handle3);
		
			}
		})

		await joplin.views.menuItems.create('openDialogBug', 'openDialogBug', MenuItemLocation.EditorContextMenu, { accelerator: "Ctrl+Alt+N" });

		
	},

});
