filename = "./.gitignore"
lines = open(filename, "r").readlines()
complete = False
i = 0
targetLine = 0

for line in lines:
    if line == '/ios/Pods/\n' and complete == False:
        complete = True
        targetLine = i
    i+=1

lines[targetLine] = """/ios/Pods/

# Env
.env*
"""
open(filename, "w").write(''.join(lines))
