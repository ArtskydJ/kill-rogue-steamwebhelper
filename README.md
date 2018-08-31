Kill Rogue steamwebhelper.exe
=============================

Sometimes steamwebhelper.exe sits at 25% of my CPU usage.  
This causes Rocket League to drop frames.  
I hate dropping frames.

So I check my task manager, and whaddya know! steamwebhelper.exe is eating one of my four cores.  
This causes Rocket Leage to drop frames.  
I hate dropping frames.

This program is to keep me from dropping frames. Because...  
I hate dropping frames.

This program is cheaper than upgrading my CPU and GPU.


How do I use this amazing thing?
--------------------------------

1. Clone this whole repo
2. Install [node.js](https://nodejs.org/en/download/), and make it available on the `PATH`
2. Open Task Scheduler (Hit the Windows Key, and type `Task Scheduler`)
3. Choose the folder in which you want the new task, and click `Create Task`
	a. Set the task's program to be `cmd.exe`
	b. Set the task's arguments to be `/c start /min C:\Users\Joseph\Github\kill-rogue-steamwebhelper\kill-rogue-steamwebhelper.bat ^& exit` (except the path into which you downloaded this repo)
	c. Set the task's starting location to be `C:\Users\Joseph\Github\kill-rogue-steamwebhelper` (except the path into which you downloaded this repo)
	d. Set the task's schedule, etc., and then save the task
5. Click Run, just to test the task


License
-------

MIT
