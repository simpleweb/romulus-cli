filename = "./android/app/build.gradle"
lines = open(filename, "r").readlines()
complete = False
i = 0
firstEmptyLine = 0

for line in lines:
    if line == "\n" and complete == False:
        complete = True
        firstEmptyLine = i
    i+=1

lines[firstEmptyLine] = """
project.ext.envConfigFiles = [
    debug: ".env",
    release: ".env.production",
    staging: ".env.staging"
]

apply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"

"""
open(filename, "w").write(''.join(lines))
