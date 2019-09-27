filename = "./android/app/build.gradle"
lines = open(filename, "r").readlines()
complete = False
i = 0
targetLine = 0

for line in lines:
    if line == '    implementation "com.facebook.react:react-native:+"  // From node_modules\n' and complete == False:
        complete = True
        targetLine = i
    i+=1

lines[targetLine] = """    implementation "com.facebook.react:react-native:+"  // From node_modules

    implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
"""
open(filename, "w").write(''.join(lines))
