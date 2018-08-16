#!/usr/bin/python
import sys
project = sys.argv[1]
filename = "./ios/{0}.xcodeproj/xcshareddata/xcschemes/{0}.xcscheme".format(project)
staging = "./ios/{0}.xcodeproj/xcshareddata/xcschemes/{0} (Staging).xcscheme".format(project)
production = "./ios/{0}.xcodeproj/xcshareddata/xcschemes/{0} (Production).xcscheme".format(project)
lines = open(filename, "r").readlines()

complete = False
i = 0
lineToWrite = 0

for line in lines:
    if "<BuildActionEntries>" in line and complete == False:
        complete = True
        lineToWrite = i
    i+=1

lines[lineToWrite] = """        <PreActions>
            <ExecutionAction
                ActionType = "Xcode.IDEStandardExecutionActionsCore.ExecutionActionType.ShellScriptAction">
                <ActionContent
                   title = "Run Script"
                   scriptText = "echo &quot;.env.production&quot; &gt; /tmp/envfile">
                </ActionContent>
            </ExecutionAction>
        </PreActions>
        <BuildActionEntries>
"""

open(production, "w").write("".join(lines))

lines[lineToWrite] = """        <PreActions>
            <ExecutionAction
                ActionType = "Xcode.IDEStandardExecutionActionsCore.ExecutionActionType.ShellScriptAction">
                <ActionContent
                   title = "Run Script"
                   scriptText = "echo &quot;.env.staging&quot; &gt; /tmp/envfile">
                </ActionContent>
            </ExecutionAction>
        </PreActions>
        <BuildActionEntries>
"""

open(staging, "w").write("".join(lines))
